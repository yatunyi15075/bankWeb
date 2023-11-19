import {Button} from 'react-bootstrap';

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
            <Button type="button" className={`py-4 px-6 
                bg-blue-gradient font-poppins font-medium 
                text-[18px] text-primary outline-none mt-10 rounded-[10px]`}>
                Get Started
            </Button>
        </div>
        <div className={layout.sectionImg}>
            <img src={card} alt="card" className= "w-[100%] h-[100%]"/>

        </div>

    </section>       
)


export default CardDeal