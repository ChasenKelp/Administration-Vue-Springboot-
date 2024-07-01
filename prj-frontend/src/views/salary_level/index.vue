<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="70px">
      <el-form-item label="职位类型" prop="jobType">
        <el-input
          v-model="queryParams.jobType"
          placeholder="请输入职位类型"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="薪资水平" prop="salary">
        <el-input
          v-model="queryParams.salary"
          placeholder="请输入薪资水平"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="上下幅度" prop="salaryrange">
        <el-input
          v-model="queryParams.salaryrange"
          placeholder="请输入上下幅度"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search"  @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh"  @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row >
       <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          @click="handleAdd"
        >新增</el-button>
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          :disabled="single"
          @click="handleUpdate"
        >修改</el-button>
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          :disabled="multiple"
          @click="handleDelete"
        >删除</el-button>
    </el-row>

    <el-table v-loading="loading" :data="salary_levelList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="编号" align="center" prop="id" />
      <el-table-column label="职位类型" align="center" prop="jobType" />
      <el-table-column label="薪资水平" align="center" prop="salary" />
      <el-table-column label="上下幅度" align="center" prop="salaryrange" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"

          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"

          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改薪资标准管理对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="职位类型" prop="jobType">
          <el-input v-model="form.jobType" placeholder="请输入职位类型" />
        </el-form-item>
        <el-form-item label="薪资水平" prop="salary">
          <el-input v-model="form.salary" placeholder="请输入薪资水平" />
        </el-form-item>
        <el-form-item label="上下幅度" prop="salaryrange">
          <el-input v-model="form.salaryrange" placeholder="请输入上下幅度" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listSalary_level, getSalary_level, delSalary_level, addSalary_level, updateSalary_level } from "@/api/salary_level";

export default {
  name: "Salary_level",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 薪资标准管理表格数据
      salary_levelList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        jobType: null,
        salary: null,
        salaryrange: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询薪资标准管理列表 */
    getList() {
      this.loading = true;
      listSalary_level(this.queryParams).then(response => {
        this.salary_levelList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        jobType: null,
        salary: null,
        salaryrange: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加薪资标准管理";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getSalary_level(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改薪资标准管理";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateSalary_level(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addSalary_level(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$modal.confirm('是否确认删除薪资标准管理编号为"' + ids + '"的数据项？').then(function() {
        return delSalary_level(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    }
  }
};
</script>
