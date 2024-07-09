package com.prj.service;

import java.util.List;
import com.prj.domain.Dept;

public interface IDeptService
{
    //根据id查询部门信息
    public Dept selectDeptById(Long id);
    //根据参数查询部门信息
    public List<Dept> selectDeptList(Dept dept);

    public int insertDept(Dept dept);

    public int updateDept(Dept dept);

    public int deleteDeptByIds(Long[] ids);

    public int deleteDeptById(Long id);
}
