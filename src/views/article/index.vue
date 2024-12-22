<!--
 * @Author: wangzhen12138 1615777455@qq.com
 * @Date: 2024-12-21 19:13:17
 * @LastEditors: wangzhen12138 1615777455@qq.com
 * @LastEditTime: 2024-12-22 17:46:10
 * @FilePath: \My-Vue3\src\views\article\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <div style="width:100%;display: flex;justify-content: center;">
            <el-scrollbar max-height="400px">
                <div style="margin:20px">
                    <el-text class="w-150px mb-2" truncated>
                        请输入您想要输入的文章信息
                    </el-text>
                    <el-input v-model="artTitle" placeholder="请输入文章的标题" />
                </div>
                <editor v-model="articleContent" :min-height="192" />
            </el-scrollbar>
        </div>
        <div style="display: flex; justify-content: center;">
            <el-button type="primary" @click="dialogTableVisible = true">
                保存
            </el-button>
        </div>

        <el-dialog v-model="dialogTableVisible" title="请选择文章的主题">
            <el-form :model="form">
                <el-form-item label="标签名" :label-width="formLabelWidth">
                    <el-select v-model="form.artTabName" filterable allow-create placeholder="请选择一个选项">
                        <el-option label="Zone No.1" value="shanghai" />
                    </el-select>
                </el-form-item>
                <div style="display: flex;">
                    <el-button type="primary" @click="saveClick">
                        确认
                    </el-button>
                    <el-button type="primary" @click="dialogTableVisible = false">
                        取消
                    </el-button>
                </div>
            </el-form>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, reactive, shallowRef, onBeforeUnmount, onMounted } from 'vue'
import "@wangeditor/editor/dist/css/style.css";
import { addTabList } from '../../api/articleManage/articlemanage';
import { ElMessage } from 'element-plus'
const artTitle = ref("")
const articleContent = ref("")
const dialogTableVisible = ref(false)
const form = ref({
    artTabName: '',
})
const saveClick = async () => {
    let params = {
        artTitle: artTitle.value,
        articleContent: articleContent.value,
        tabartTabNameName: form.value.artTabName
    }
    const { message } = await addTabList(params)
    if (message == "添加成功") {
        dialogTableVisible.value = false
        addSuccess()

    }
}
const addSuccess = () => {
    ElMessage({
        message: '创建文章成功',
        type: 'success',
    })
}
// import { Editor, Toolbar } from "wangeditor";
const content = ref('')
</script>

<style lang='scss' scoped>
button {
    margin-top: 20px;
    padding: 2px 5px;
    background-color: #57a3ef;
    border: none;
    color: #fff;
    border-radius: 2px;
}
</style>