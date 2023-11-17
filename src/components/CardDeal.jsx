import {card } from '../assets';
import styles, { layout } from '../style';

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Find a better 
            card deal <br className="sm:block hidden"/> 
            in few easy steps.</h2>
            <p className={`${styles.paragraph} max-w-[470px] 
            mt-5`}> dshdbdhfwh njhkhfkhkf fjkhdwhdhw fnwejh
            dkjhuhfwe fnjwhhefh fkwehkhwkfhwe nkhwhdkw fbjeh
            kjfhhfw fjhwkhkfh nfwkhfwhf jfkwhf fkhwfwu fnjhf
            </p>
        </div>
        <div className={layout.sectionImg}>
            <img src={card} alt="card" className= "w-[100%] h-[100%]"/>

        </div>

    </section>       
)


export default CardDeal