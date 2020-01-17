<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="商城投放轮播图位置" name="1">
                <div class="container">
                    <div class="handle-box">
                        <el-button
                            type="primary"
                            icon="el-icon-delete"
                            class="handle-del mr10"
                            @click="delAllSelection"
                        >批量删除</el-button>
                        <el-input v-model="query.name" placeholder="商品名" class="handle-input mr10"></el-input>
                        <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                        <el-button type="primary" icon="el-icon-search" @click="addDialog=true">添加</el-button>
                    </div>
                    <el-table
                        :data="arr"
                        border
                        class="table"
                        ref="multipleTable"
                        header-cell-class-name="table-header"
                        @selection-change="handleSelectionChange"
                    >
                        <el-table-column type="selection" width="55" align="center"></el-table-column>
                        <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                        <el-table-column prop="name" label="商品名" align="center"></el-table-column>
                        <el-table-column prop="Price" label="金额" align="center"></el-table-column>
                        <el-table-column prop="newPrice" label="折扣金额" align="center"></el-table-column>
                        <el-table-column label="商品图片" align="center" class="wtl-img">
                            <template slot-scope="scope">
                                <img src="../../assets/logo.png" alt />
                            </template>
                        </el-table-column>
                        <el-table-column prop="date" label="投放时间"></el-table-column>
                        <el-table-column label="操作" width="180" align="center">
                            <template slot-scope="scope">
                                <el-button
                                    type="text"
                                    icon="el-icon-edit"
                                    @click="handleEdit(scope.$index, scope.row)"
                                >编辑</el-button>
                                <el-button
                                    type="text"
                                    icon="el-icon-delete"
                                    class="red"
                                    @click="handleDelete(scope.$index, scope.row)"
                                >删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="pagination">
                        <el-pagination
                            background
                            layout="total, prev, pager, next"
                            :current-page="query.pageIndex"
                            :page-size="query.pageSize"
                            :total="pageTotal"
                            @current-change="handlePageChange"
                        ></el-pagination>
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="楼层区推荐" name="2">
                <div class="container">
                    <div class="handle-box">
                        <el-button
                            type="primary"
                            icon="el-icon-delete"
                            class="handle-del mr10"
                            @click="delAllSelection"
                        >批量删除</el-button>
                        <el-select
                            v-model="query.address"
                            placeholder="地址"
                            class="handle-select mr10"
                        >
                            <el-option key="1" label="广东省" value="广东省"></el-option>
                            <el-option key="2" label="湖南省" value="湖南省"></el-option>
                        </el-select>
                        <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
                        <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                    </div>
                    <el-table
                        :data="tableData"
                        border
                        class="table"
                        ref="multipleTable"
                        header-cell-class-name="table-header"
                        @selection-change="handleSelectionChange"
                    >
                        <el-table-column type="selection" width="55" align="center"></el-table-column>
                        <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                        <el-table-column prop="name" label="用户名"></el-table-column>
                        <el-table-column label="账户余额">
                            <template slot-scope="scope">￥{{scope.row.money}}</template>
                        </el-table-column>
                        <el-table-column label="头像(查看大图)" align="center">
                            <template slot-scope="scope">
                                <el-image
                                    class="table-td-thumb"
                                    :src="scope.row.thumb"
                                    :preview-src-list="[scope.row.thumb]"
                                ></el-image>
                            </template>
                        </el-table-column>
                        <el-table-column prop="address" label="地址"></el-table-column>
                        <el-table-column label="状态" align="center">
                            <template slot-scope="scope">
                                <el-tag
                                    :type="scope.row.state==='成功'?'success':(scope.row.state==='失败'?'danger':'')"
                                >{{scope.row.state}}</el-tag>
                            </template>
                        </el-table-column>

                        <el-table-column prop="date" label="注册时间"></el-table-column>
                        <el-table-column label="操作" width="180" align="center">
                            <template slot-scope="scope">
                                <el-button
                                    type="text"
                                    icon="el-icon-edit"
                                    @click="handleEdit(scope.$index, scope.row)"
                                >编辑</el-button>
                                <el-button
                                    type="text"
                                    icon="el-icon-delete"
                                    class="red"
                                    @click="handleDelete(scope.$index, scope.row)"
                                >删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="pagination">
                        <el-pagination
                            background
                            layout="total, prev, pager, next"
                            :current-page="query.pageIndex"
                            :page-size="query.pageSize"
                            :total="pageTotal"
                            @current-change="handlePageChange"
                        ></el-pagination>
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="更多推荐" name="3">
                <div class="container">
                    <div class="handle-box">
                        <el-button
                            type="primary"
                            icon="el-icon-delete"
                            class="handle-del mr10"
                            @click="delAllSelection"
                        >批量删除</el-button>
                        <el-select
                            v-model="query.address"
                            placeholder="地址"
                            class="handle-select mr10"
                        >
                            <el-option key="1" label="广东省" value="广东省"></el-option>
                            <el-option key="2" label="湖南省" value="湖南省"></el-option>
                        </el-select>
                        <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
                        <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                    </div>
                    <el-table
                        :data="tableData"
                        border
                        class="table"
                        ref="multipleTable"
                        header-cell-class-name="table-header"
                        @selection-change="handleSelectionChange"
                    >
                        <el-table-column type="selection" width="55" align="center"></el-table-column>
                        <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                        <el-table-column prop="name" label="用户名"></el-table-column>
                        <el-table-column label="账户余额">
                            <template slot-scope="scope">￥{{scope.row.money}}</template>
                        </el-table-column>
                        <el-table-column label="头像(查看大图)" align="center">
                            <template slot-scope="scope">
                                <el-image
                                    class="table-td-thumb"
                                    :src="scope.row.thumb"
                                    :preview-src-list="[scope.row.thumb]"
                                ></el-image>
                            </template>
                        </el-table-column>
                        <el-table-column prop="address" label="地址"></el-table-column>
                        <el-table-column label="状态" align="center">
                            <template slot-scope="scope">
                                <el-tag
                                    :type="scope.row.state==='成功'?'success':(scope.row.state==='失败'?'danger':'')"
                                >{{scope.row.state}}</el-tag>
                            </template>
                        </el-table-column>

                        <el-table-column prop="date" label="注册时间"></el-table-column>
                        <el-table-column label="操作" width="180" align="center">
                            <template slot-scope="scope">
                                <el-button
                                    type="text"
                                    icon="el-icon-edit"
                                    @click="handleEdit(scope.$index, scope.row)"
                                >编辑</el-button>
                                <el-button
                                    type="text"
                                    icon="el-icon-delete"
                                    class="red"
                                    @click="handleDelete(scope.$index, scope.row)"
                                >删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="pagination">
                        <el-pagination
                            background
                            layout="total, prev, pager, next"
                            :current-page="query.pageIndex"
                            :page-size="query.pageSize"
                            :total="pageTotal"
                            @current-change="handlePageChange"
                        ></el-pagination>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="商品名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="商品原价">
                    <el-input v-model="form.Price"></el-input>
                </el-form-item>
                <el-form-item label="商品现价">
                    <el-input v-model="form.newPrice"></el-input>
                </el-form-item>
                <el-form-item label="商品图片">
                    <img style="width: 100px; height: 100px" :src="form.img" />
                </el-form-item>
                <el-form-item label="投放时间">
                    <el-date-picker
                        size="mini"
                        v-model="form.date"
                        value-format="yyyy-MM-dd"
                        type="date"
                        placeholder="请选择投放结束日期"
                    ></el-date-picker>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog
            title="添加投放"
            :visible.sync="addDialog"
            width="30%"
            center
            :close-on-click-modal="false"
        >
            <el-card shadow="hover" style="margin-top:-15px;width:100%">
                <el-row>
                    <el-col style="margin-top:20px">
                        <el-input placeholder="请输入商品品名" v-model="swiperdata.sName" size="mini"></el-input>
                    </el-col>
                    <el-col style="margin-top:20px">
                        <el-input placeholder="请输入原价" v-model="swiperdata.sPrice" size="mini"></el-input>
                    </el-col>
                    <el-col style="margin-top:20px">
                        <el-input placeholder="请输入现价" v-model="swiperdata.snewPrice" size="mini"></el-input>
                    </el-col>
                    <el-col :span="12" style="margin-top:20px">
                        <el-input
                            v-model="swiperdata.shopDate"
                            disabled
                            placeholder="请选择投放结束日期"
                            size="mini"
                        ></el-input>
                    </el-col>
                    <el-col :span="4" style="margin-left:20px;margin-top:20px">
                        <el-date-picker
                            size="mini"
                            v-model="swiperdata.shopDate"
                            value-format="yyyy-MM-dd"
                            type="date"
                            placeholder="请选择投放结束日期"
                        ></el-date-picker>
                    </el-col>
                </el-row>
            </el-card>
            <span slot="footer" style="margin-top:-30px">
                <el-button @click="addDialog = false" size="mini">取 消</el-button>
                <el-button
                    style="width:200px"
                    type="primary"
                    size="mini"
                    @click="btnSwiperAdd()"
                >确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { fetchData } from '../../api/index';
import { getswiperList, addswiperList,putswiperList,deleteswiperList } from '../../api/myShop/index';
export default {
    name: 'basetable',
    data() {
        return {
            arr: [], //轮播图列表

            addDialog: false, //添加
            swiperdata: {
                sName: '', //轮播商品名
                sPrice: '', //原价
                snewPrice: '', //现价
                shopDate: '' //结束日期
            },
            //首封信
            activeName: '1',
            query: {
                address: '',
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {}, //当前行表格数据
            idx: -1,
            id: -1
        };
    },
    async created() {
        this.getData();
        const { data } = await getswiperList();
        this.arr = data;
        console.log(this.arr);
    },
    methods: {
        // tl
        //点击添加轮播图
        async btnSwiperAdd() {
            const { data } = await addswiperList(this.swiperdata);
            console.log(data);
        },
        // tl

        // 获取 easy-mock 的模拟数据
        getData() {
            fetchData(this.query).then(res => {
                console.log(res);
                this.tableData = res.list;
                this.pageTotal = res.pageTotal || 50;
            });
        },
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
            this.getData();
        },
        // 删除操作
        handleDelete(index, row) {
            // 二次确认删除
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(() => {
                    //删除 tl
               deleteswiperList(row.id)
                    this.$message.success('删除成功');
                    this.tableData.splice(index, 1);
                 
                })
                .catch(() => {});
        },
        // 多选操作
        handleSelectionChange(val) {
            alert('0');
            console.log(val);
            this.multipleSelection = val;
        },
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
        },
        // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        // 保存编辑
       async saveEdit() {
            this.editVisible = false;
            this.$message.success(`修改第 ${this.idx + 1} 行成功`);
            // this.$set(this.tableData, this.idx, this.form);
        const {data} =await   putswiperList(this.form)
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        }
    }
};
</script>

<style  scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}

.cell img {
    width: 100px;
    height: 100px;
}
</style>
