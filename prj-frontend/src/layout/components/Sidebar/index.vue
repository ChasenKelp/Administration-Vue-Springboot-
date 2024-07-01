<template>
    <div>
        <el-scrollbar  wrap-class="scrollbar-wrapper">
            <el-menu
                router
                :default-active="defaultActivePath"
                background-color= #304156
                text-color= #bfcbd9
                active-text-color= #fed14c
                :unique-opened="true"
            >
                <el-menu-item index='/index' >
                    <template slot="title">
                       <i class="el-icon-location"></i>
                       <span>回到首页</span>
                    </template>
                </el-menu-item>

                <el-submenu index="">
                    <template slot="title">
                       <item :title="信息管理" />
                       <i class="el-icon-location"></i>
                       <span>信息管理</span>
                     </template>

                    <el-menu-item-group>
                        <el-menu-item index="/salary_level">薪资标准管理</el-menu-item>
                        <el-menu-item index="/hirenum">招人名额管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="/info_manager">
                    <template slot="title">
                       <i class="el-icon-location"></i>
                       <span>员工管理</span>
                     </template>

                    <el-menu-item-group>
                        <el-menu-item index="/employee">员工信息管理</el-menu-item>
                        <el-menu-item index="/employee_kpi">员工评价管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                 <el-submenu index="/dept">
                    <template slot="title">
                       <i class="el-icon-location"></i>
                       <span>部门信息管理</span>
                     </template>

                    <el-menu-item-group>
                        <el-menu-item index="/dept_info">部门信息管理</el-menu-item>
                    </el-menu-item-group>r
                </el-submenu>

            </el-menu>

        </el-scrollbar>
    </div>
</template>

