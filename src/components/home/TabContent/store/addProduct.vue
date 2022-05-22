<template>
<div>
    <h3>New Product</h3>
        <div class="media">
            <div class="media-body">
                <p>Product Info：</p>
                <ul>
                    <li>Product Name <input type="text" :disabled="display"></li>
                    <li>Photo <input type="file" :disabled="display"></li>
                    <li>Upload Date <input type="date" :disabled="display"></li>
                    <li>Price <input type="number" oninput="if(value<0)value=0" :disabled="display"></li>
                </ul>
                <button type="button" class="btn btn-success" style="margin:20px;"
                @click="addBtn" :disabled="display">ADD</button>
            </div>
        </div>

        <!-- href backto iShow -->
            <h4 v-if="display" style="text-align: center;">COMPLETED!</h4>
            <h5 v-if="display" style="text-align: center;">
                <span @click="reload">Keep going</span> / 
                <span @click="btShow">Backto [Show]</span>
            </h5>
    </div>
</template>
<style scoped lang="scss">

</style>
<script setup>

</script>
