<template>
    <el-tree :data="menus" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</template>

<script>
export default {
    name: 'category',
    components: {},
    directives: {},
    data() {
        return {
            menus: [],
            defaultProps: {
                children: 'children',
                label: 'name'
            }
        };
    },
    mounted() {

    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
        },
        getMenus() {
            this.$http({
                url: this.$http.adornUrl('/product/category/list/tree'),
                method: 'get'
            }).then(({ data }) => {
                this.menus = data.data; // 数组内容， 把数据给menus， 就是给了vue实例，最后绑定到视图上

                console.log(data)
            })
        }
    },
    created() {
        this.getMenus();
    }
};
</script>

<style scoped>

</style>

