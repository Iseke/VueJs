<template>
    <div>
        <button @click="goHome" class="backBtn">Back</button>
        <table class="tableCl">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Author</th>
                <th>Date</th>
            </tr>
            <tr class="createClass">
                <td><input type="text" placeholder="Title" v-model="newTitle" class="initF"></td>
                <td><input type="text" placeholder="Description" v-model="newDescription" class="initF"></td>
                <td><input type="text" placeholder="Author" v-model="newAuthor" class="initF"></td>
                <td>Auto Detected</td>
                <button @click="addPost" class="createB">Create</button>
            </tr>
        </table>
    </div>
</template>

<script>
    const STORAGE_KEY = 'post-storage';
    export default {
        data(){
            return{
                newTitle: '',
                newDescription: '',
                newAuthor: '',
                postLists: [],

            }
        },
        created(){
            this.postLists = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        } ,
        methods: {
            addPost(){
                if(this.newTitle=='' && this.newDescription=='')return
                this.postLists.push({
                    title: this.newTitle,
                    description: this.newDescription,
                    creationDate: new Date(),
                    author: this.newAuthor
                })
                localStorage.setItem(STORAGE_KEY,JSON.stringify(this.postLists));
                this.newTitle=''
                this.newDescription=''
                this.newAuthor=''
            },
            goHome(){
                this.$router.push('/');
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    .tableCl{
        font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
        font-size: 16px;
        background: white;
        max-width: 70%;
        width: 70%;
        text-align: left;
    }
    .initF{
        font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
        font-size: 16px;
    }
    .createB{
        font-size: 12px;
        text-align: center;
        display: inline-block;
        color: darkmagenta;
        padding: 7px 12px;
        margin-left: 25px;
    }
    .backBtn{
        font-size: 12px;
        text-align: center;
        display: inline-block;
        color: darkmagenta;
        padding: 7px 12px;
    }

</style>
