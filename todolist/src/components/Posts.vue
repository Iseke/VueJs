<template>
    <div>
        <button @click="createPost" class="createBtn">Create Post</button>
        <table border=2 class="viewTable">
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Author</th>
                <th>Date</th>
            </tr>
            <tr v-for='(post,indx) in postLists'>
                <td>{{indx+1}}</td>
                <td>{{post.title}}</td>
                <td>{{post.description}}</td>
                <td>{{post.author}}</td>
                <td>{{post.creationDate}}</td>
                <td><button @click="postDetail(indx)" class="moreBtn">more...</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
    const STORAGE_KEY = 'post-storage';
    export default {
       data(){
           return {
                curId: '',
                newTitle: '',
                newDescription: '',
                newAuthor: '',
                postLists: [],
                likes: [
                    {
                        count: 0,
                    }
                ]
           }
       } ,
       created(){
         this.postLists = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
       } ,
       methods: {
         createPost() {
             this.$router.push('/createPost');
         } ,
         postDetail(index){
            this.$router.push('/postDetail/'+index)
         }

       }
    }
</script>

<style>
.viewTable{
    font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
    font-size: 14px;
    background: white;
    max-width: 70%;
    width: 70%;
    text-align: left;
}
td{
  color: #669;
  padding: 9px 8px;
  transition: .3s linear;
}
.createBtn{
    
    color: blue;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
.moreBtn{
    font-size: 16px;
    text-align: center;
    display: inline-block;
    color: darkviolet;

}
</style>
