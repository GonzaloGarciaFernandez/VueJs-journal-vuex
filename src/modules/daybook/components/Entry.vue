<template >
    <div 
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry' , params: { id: 10 }})"
    >
        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, Jueves</span>
        </div>
        <div class="entry-description">
            Consequat nisi mollit adipisicing qui Lorem aute non esse. Consectetur officia quis nulla velit et duis fugiat pariatur. Irure sunt pariatur elit nulla consectetur ullamco amet aute Lorem. Culpa nulla sunt enim qui tempor eu veniam velit aute irure laboris ipsum est. Excepteur mollit exercitation qui excepteur ullamco in pariatur irure cupidatat deserunt aute. Non duis eiusmod sint duis Lorem ut Lorem elit sint eiusmod laborum.
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount:45);
    }

    .entry-description{
        font-size: 12px;
    }
}

</style>