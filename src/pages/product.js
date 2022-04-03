import Title from "../components/pageTitle";
import Container from "../components/Container";
import EmptyProductState from "../components/exptyProductPage";
import AddProduct from "../components/addProduct";
import { useContext, useEffect, useState } from "react";
import AddCategoryModal from '../components/ui/AddCategoryModal.jsx';
import { ProductList } from "../context/productContect";

import CategoryContainer from "../components/ui/CategoryContainer"

const Product = () => {

    const [modalHeight, setModalHeight] = useState(0)

    const height = document.querySelector('body').scrollHeight;
    const body = document.querySelector('body');
    const item = (height - window.innerHeight) + 51;


    const [addClicked, setAddclicked] = useState(false);
    const [catname, setcatname] = useState('');
    const ProductCtx = useContext(ProductList)


    const AddMoadal = () => {
        setAddclicked(true);
        body.style.overflow = 'hidden'
    }
    const closeModal = () => {
        setAddclicked(false);
        body.style.overflow = 'auto';
    }
    const addProductHandler = () => {
    }

    const addCategoryHandler = () => {

        ProductCtx.addCategory(catname);
        setcatname('');
        closeModal();
    }
    useEffect(() => {
        if (item > 0) {
            setModalHeight(item)
        } else {
            setModalHeight(0)
        }
    }, [height, item])

    

    return <Container>
        <Title name="محصولات" />
        {!ProductCtx.items.length && <EmptyProductState />}

        {ProductCtx.items.map((el, i) => <CategoryContainer {...el} key={i} />)}
        <AddProduct add={AddMoadal} />
        {addClicked && <AddCategoryModal
            catName={catname}
            setCatName={setcatname}
            closeHandler={closeModal}
            addCategory={addCategoryHandler}
            modalHeight={modalHeight}
            addProductHandler={addProductHandler} />}

    </Container>
}
export default Product