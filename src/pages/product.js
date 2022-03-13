import Title from "../components/pageTitle";
import Container from "../components/Container";
import EmptyProductState from "../components/exptyProductPage";
import AddProduct from "../components/addProduct";
import { useContext, useState } from "react";
import AddCategoryModal from '../components/ui/AddCategoryModal.jsx';
import { ProductList } from "../context/productContect";

import CategoryContainer from "../components/ui/CategoryContainer"

const Product = () => {
    const [addClicked, setAddclicked] = useState(false)
    const [catname, setcatname] = useState('');
    const ProductCtx = useContext(ProductList)


    const AddMoadal = () => {
        setAddclicked(true)
    }
    const closeModal = () => {
        setAddclicked(false)
    }
    const addProductHandler = () => {

        console.log('sds');
        // ProductCtx.addProduct({
            
        // })
        // setAddclicked(false)
    }

    const addCategoryHandler = () => {
        ProductCtx.addCategory(catname);
        setcatname('');
        closeModal();
    }
   
    return <Container>
        <Title name="محصولات" />
        { !ProductCtx.items.length &&  <EmptyProductState />}
       
        {ProductCtx.items.map((el , i) => <CategoryContainer {...el} key={i} />)}
        <AddProduct add={AddMoadal} />
        {addClicked && <AddCategoryModal
                            catName={catname}
                            setCatName={setcatname}
                            closeHandler={closeModal}
                            addCategory={addCategoryHandler}
                            addProductHandler={addProductHandler} />}

    </Container>
}
export default Product