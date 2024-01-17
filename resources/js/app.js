import "./bootstrap";
import { createApp } from "vue/dist/vue.esm-bundler";
import App from "@/Component/App.vue";
import Modal from "@/Component/Modal.vue";
import EditUser from "@/Component/UserComp/EditUser.vue";
import addUser from "@/Component/UserComp/addUser.vue";
import MainUser from "@/Component/UserComp/MainUser.vue";
import Product from "@/Component/ProdComp/Product.vue";
import Category from "@/Component/ProdComp/Category.vue";
import addProduct from "@/Component/ProdComp/addProduct.vue";
import editProduct from "@/Component/ProdComp/editProduct.vue";
import editCategory from "@/Component/ProdComp/editCategory.vue";
import addCategory from "@/Component/ProdComp/addCategory.vue";

import userHome from "@/Component/userHome.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

import Layout from "@/Layout/Layout.vue";
import userLayout from "@/Layout/userLayout.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
const app = createApp({});

app.use(router);

app.component("app", App);
app.component("MainUser", MainUser);
app.component("EditUser", EditUser);
app.component("addUser", addUser);
app.component("product", Product);
app.component("addproduct", addProduct);
app.component("editproduct", editProduct);
app.component("category", Category);
app.component("editcategory", editCategory);
app.component("addcategory", addCategory);
app.component("modal", Modal);

app.component("userHome", userHome);
app.component("Layout", Layout);
app.component("userLayout", userLayout);

app.mount("#app");
