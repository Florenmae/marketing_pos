<template>
    <Modal
        :modalContent="modalContent"
        :buttonLabel="'Add Product'"
        :cancelLabel="'Cancel'"
        :saveLabel="'Save'"
        @save="submitProduct"
        :save-option="true"
    >
        <form @submit.prevent="submitProduct" class="p-4 md:p-5">
            <div class="grid gap-4 mb-4 grid-cols-4">
                <div class="col-span-2">
                    <label
                        for="cat_code"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Category Code</label
                    >
                    <input
                        v-model="editProduct.cat_code"
                        type="text"
                        name="cat_code"
                        id="cat_code"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type the product code"
                        required=""
                    />
                    <!-- <select
                        v-model="editProduct.cat_code"
                        type="text"
                        name="cat_code"
                        id="cat_code"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="select category "
                        required=""
                    >
                        <option selected>Choose a supplier</option>
                        <option value="cat_code">{{ cat_code }}</option>
                        <option value="Project">Project</option>
                    </select> -->
                </div>
                <div class="col-span-2">
                    <label
                        for="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Item Code</label
                    >
                    <input
                        v-model="editProduct.item_code"
                        type="text"
                        name="item_code"
                        id="item_code"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type the item code"
                        required=""
                    />
                </div>
                <div class="col-span-2 border-red-500">
                    <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Product Name</label
                    >
                    <input
                        v-model="editProduct.name"
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type product name"
                        required=""
                    />
                </div>
                <div class="col-span-2 border-red-500">
                    <label
                        for="supplier"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Product supplier</label
                    >
                    <select
                        v-model="editProduct.supplier"
                        type="text"
                        name="supplier"
                        id="supplier"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Choose Supplier"
                    >
                        <option value="IGP">IGP</option>
                        <option value="Project">Project</option>
                    </select>
                </div>
                <div class="col-span-2">
                    <label
                        for="price"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Price</label
                    >
                    <input
                        v-model="editProduct.price"
                        type="text"
                        name="price"
                        id="price"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type the product price"
                        required=""
                    />
                </div>
                <div class="col-span-2">
                    <label
                        for="qty"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Quantity</label
                    >
                    <input
                        v-model="editProduct.qty"
                        type="text"
                        name="qty"
                        id="qty"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Product Quantity"
                        required=""
                    />
                </div>
                <div class="col-span-2">
                    <label
                        for="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Description</label
                    >
                    <textarea
                        v-model="editProduct.description"
                        type="text"
                        name="description"
                        id="description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Product Details"
                        required=""
                    />
                </div>
            </div>
        </form>
    </Modal>
</template>

<script>
import Modal from "@/Component/Modal.vue";
export default {
    props: ["product"],
    components: {
        Modal,
    },
    data() {
        return {
            editingProductId: null,
            editProduct: {
                item_code: "",
                cat_code: "",
                name: "",
                supplier: "",
                price: "",
                qty: "",
                description: "",
            },
            modalContent: {
                title: "Create New Product",
                content: "Please fill in the product details",
                disablebtn: false,
            },
        };
    },
    methods: {
        getProducts() {
            axios.get("/get-products").then(({ data }) => {
                this.products = data;
            });
        },
        submitProduct() {
            const { editProduct } = this;
            const prodPayload = {
                ...editProduct,
            };

            axios
                .post("/submit-product", prodPayload)
                .then(({ data }) => {
                    this.getProducts;
                });
        },
    },
    mounted() {
        this.getProducts();
    },
};
</script>
