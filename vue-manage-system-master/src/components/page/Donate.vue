<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-redpacket_fill"></i> 小龙在线陪聊
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="container">
            <ul class="ul1" ref='refs'>
                <!-- <li v-for="item in list" :key="item.index"> {{item.title}}</li>
                <li class="fr" v-for="item in list1" :key="item.index">{{item.title}}</li> -->
            </ul>
            <div class="button">
                <el-input v-model="massage"></el-input>
                <el-button @click="w">发送</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { wtl } from '../../api/tl/index';
export default {
    data() {
        return {
            massage: '123',
            list:[{title:'你好啊'}],
            list1:[{title:'你好啊'}],
        };
    },
    methods: {
        async w() {
            // this.list.push({title:this.massage})
            var p = document.createElement("li"); // 创建一个元素节点
            p.innerHTML=this.massage
            this.$refs.refs.appendChild(p)
            let formData = new FormData();
            formData.append('deviceId', '34733473-3473-3473-3473-347334733473');
            formData.append('question', this.massage);
            const { data } = await wtl(formData);
            const content = data.data.results; //数组【0】回答【1】故事音乐
                  var p1 = document.createElement("li"); // 创建一个元素节点
            if (content.length == 1) {
                // this.list1.push({title:content[0].values.text})
                  p1.innerHTML=content[0].values.text
                  p1.style.marginLeft = '50%';
                  this.$refs.refs.appendChild(p1)
            } else {
                p1.innerHTML=content[0].values.text
                p1.style.marginLeft = '50%';
                this.$refs.refs.appendChild(p1)
                var p2= document.createElement("li"); 
                 p2.style.marginLeft = '50%';
                    p2.innerHTML=content[1].values.voice
                    this.$refs.refs.appendChild(p2)
                //  this.list1.push({title:content[0].values.text})
                //  this.list1.push({title:content[1].values.voice})
            }
        }
    }
};
</script>

<style lang='less' scoped>
.container {
        .fr {
        margin-left: 50%;
    }
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    width: 100%;
    height: 800px;
    li{
        width:500px
    }
    .fr {
        margin-left: 50%;
    }
    .button {
        position: absolute;
        bottom: 0;
        display: flex;
    }
}
</style>