

<template>
<div class="component-tageditor" @click="inputFocus()">
    <ul >
        <li v-for="tag of parentData.tags" track-by="$index" @click="deleteTag(tag)">
            {{ tag }}
        </li>
    </ul>
    <input v-model="currentTag" type="text" @keyup.space="add()" @keyup.delete="backspace()" v-show="parentData.tags.length < maxTags"/>
</div>
</template>

<script>
    export default {
        props: ['parentData', 'maxTags'],
        data() {
            return {
                currentTag: ''
            }
        },
        methods: {
            deleteTag(tag) {
                
                let editor = this;
                let tags = editor.parentData.tags;
                
                let result = [];
                
                tags.forEach(
                    function (item) {
                        if (item !== tag) {
                            result.push(item);
                        }
                    }
                );
                
                editor.parentData.tags = result;
                
            },
            backspace() {
                if (!this.currentTag.trim().length) {
                    this.parentData.tags.pop();
                }
            },
            add() {
               
               let editor = this;
               let tags = editor.parentData.tags;
               let currentTag = editor.currentTag.trim();
               

               let flag = 0;
               tags.forEach(
                   (tag) => {
                       if (tag ===  currentTag) {
                           flag = 1;
                       }
                   }
               );
               
               if (!flag) {
                   tags.push(currentTag);
               }
               
               editor.currentTag = '';
               editor.inputFocus();
            },
            inputFocus() {
                let inputs = this.$el.getElementsByTagName('input');
                inputs[0]['focus']();
            }
        }
    }
</script>


<style>
.component-tageditor {
    font-size: 13px;
    padding: .6em .8em;
    border: 1px solid #ddd;
    
}

.component-tageditor > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-block;
}

.component-tageditor>input[type="text"] {
    border: none;
    font-size: 1em;
    outline: none;
}

.component-tageditor>ul>li {
    display: inline-block;
    margin-right: .8em;
    color: #999;
}

.component-tageditor>ul>li:hover {
    text-decoration: line-through;
    cursor: pointer;
}
</style>