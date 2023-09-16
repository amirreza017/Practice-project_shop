import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import fetchData from '../../actions/productActions';
import styles from './styleProduct.module.css';

function Cards() {
    const data = useSelector((state) => state.data);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        console.log(data);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    } if (error) {
        return (
            <div>
                Error:
                {error}
            </div>
        );
    }
    return (
        <div className={styles.cardlist}>
            {data && data.map((data) => (
                <div className={styles.card} key={data.id}>
                    <h3>{data.products}</h3>
                    <div className={styles.cardlist_img}>
                        <Image className={styles.img} src={data.image} alt="Business Image" width="150" height="100" />
                    </div>
                    <p>
                        <span>Description: </span>
                        {data.desc}
                    </p>
                    <button type="button" className={styles.btn}>Add to cart</button>
                </div>
            ))}
        </div>
    );
}

export default Cards;
