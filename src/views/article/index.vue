<template>
    <div>
        <el-scrollbar max-height="400px">
            <div style="margin:20px">
                <el-text class="w-150px mb-2" truncated>
                    请输入您想要输入的文章信息
                </el-text>
                <el-input v-model="artTitle" placeholder="请输入文章的标题" />
            </div>
            <editor v-model="articleContent" :min-height="192" />
        </el-scrollbar>
        <div style="display: flex; justify-content: center;">
            <el-button type="primary" @click="dialogTableVisible = true">
                保存
            </el-button>
        </div>
        <el-dialog v-model="dialogTableVisible" title="请选择文章的主题">
            <el-form :model="form">
                <el-form-item label="标签名" :label-width="formLabelWidth">
                    <el-select v-model="form.tabName" placeholder="请选择一个选项">
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
const artTitle = ref("")
const articleContent = ref("")
const dialogTableVisible = ref(false)
const form = ref({
    tabName: '',
})
const saveClick = () => {
    let params = {
        artTitle:artTitle.value,
        articleContent: articleContent.value,
        tabName: form.value.tabName
    }
    addTabList(params)
    debugger
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