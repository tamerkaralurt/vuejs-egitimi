<template>
    <div>
        <nav>
            <ul class="pagination">
                <li class="page-item" :class="{'disabled': meta.current_page === 1}">
                    <a href="#" class="page-link" @click="pageChange(meta.current_page - 1)">
                        &laquo;
                    </a>
                </li>
                <li class="page-item" :class="{'active':meta.current_page === page}" v-for="page in meta.last_page" :key="page">
                    <a href="#" class="page-link" @click.prevent="pageChange(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{'disabled': meta.current_page === meta.last_page}">
                    <a href="#" class="page-link" @click="pageChange(meta.current_page + 1)">
                        &raquo;
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props:['meta'],
        methods: {
            pageChange(page) {
                this.$emit('pageChange', page);
            },
        },
    }
</script>

<style scoped>

</style>
