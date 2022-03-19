import { useState } from "react";
import styled from "styled-components";

const ElemanWraper = styled.div`

& p{
    font-size:24px;
}

& .eleman_wraper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

        & .priority_divider {
            height: 92%;
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            transition: .3s;
            z-index: -1;
            border: 3px solid  #1e1c1c;;
            border-radius: 5px 10px 10px 5px!important;

        }
        & .proieriti_box{
            text-align: center;
            width: 20%;
            height: 96px;
            font-size:18px;
            display: flex;
            align-items: center;
            justify-content: center;
            & p{
                transition: 0.5s;
                opacity:0.4;

            }
            &:hover p{
                transform:translateY(-8px);
                opacity:1;
            }
        }
        & .box_1{
            border-radius: 5px 0px 0px 5px;
            opacity:0.8;
            background-color: #b1f3b1;
        }
        & .box_2{
            background-color: #d9edf3;
            opacity:0.8;
        }
        & .box_3{
            background-color: #ffffcc;
            opacity:0.8;
        }
        & .box_4{
            background-color: #ffedcc;
            opacity:0.8;
        }
        & .box_5{
            border-radius: 0px 5px 5px 0px;
            opacity:0.8;
            background-color: #ffcccc;
        }
        }
}

`

const ProiorityFaactor = ({proierity}) => {

    const [width , setWidth] = useState('20%');
    const [flexWidth , setflexWidth] = useState('19%');



    const onMouseHover = ({ target }) => {
        const classNames = target.classList.value;

        if (classNames.includes('box_1')) {
            setflexWidth('19%');
            proierity(1)
        } else if (classNames.includes('box_2')) {
            setflexWidth('39%');
            proierity(2)
        } else if (classNames.includes('box_3')) {
            setflexWidth('59%');
            proierity(3)
        } else if (classNames.includes('box_4')) {
            setflexWidth('79%')
            proierity(4)
        } else if (classNames.includes('box_5')) {
            setflexWidth('99%')
            proierity(5)
        }
    }
    const proierityOnClickHandler =({target}) => {
        const classNames = target.classList.value;

        // if (classNames.includes('box_1')) {
        //     setWidth('19%')
        // } else if (classNames.includes('box_2')) {
        //     setWidth('39%')
        // } else if (classNames.includes('box_3')) {
        //     setWidth('59%')
        // } else if (classNames.includes('box_4')) {
        //     setWidth('79%')
        // } else if (classNames.includes('box_5')) {
        //     setWidth('99%')
        // }
      
    }

    return <ElemanWraper style={{ width: '42%', margin: ' 15px 49px' }}>
        <p>اولویت فاکتور</p>
        <div className="eleman_wraper">
            <div className="priority_divider" style={{width:`${flexWidth}`}}>

            </div>
            <div
                className="proieriti_box box_1"
                onMouseEnter={(e) => { onMouseHover(e) }}
                onClick={(e) => {proierityOnClickHandler(e)}}>
                <p>1</p>
            </div>
            <div
                className="proieriti_box box_2"
                onMouseEnter={(e) => { onMouseHover(e) }}
                onClick={(e) => {proierityOnClickHandler(e)}}>
                <p>2</p>
            </div>
            <div
                className="proieriti_box box_3"
                onMouseEnter={(e) => { onMouseHover(e) }}
                onClick={(e) => {proierityOnClickHandler(e)}}>
                <p>3</p>
            </div>
            <div
                className="proieriti_box box_4"
                onMouseEnter={(e) => { onMouseHover(e) }}
                onClick={(e) => {proierityOnClickHandler(e)}}>
                <p>4</p>
            </div>
            <div
                className="proieriti_box box_5"
                onMouseEnter={(e) => { onMouseHover(e) }}
                onClick={(e) => {proierityOnClickHandler(e)}}>
                <p>5</p>
            </div>
        </div>
    </ElemanWraper>
}

export default ProiorityFaactor