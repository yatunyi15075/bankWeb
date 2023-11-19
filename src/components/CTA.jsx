import {Button} from 'react-bootstrap';

import styles from '../style';


const CTA = () =>(
    <section className={`${styles.flexCenter} 
    ${styles.marginY} ${styles.padding} sm:flex-row flex-col
     bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex-col flex">
            <h2 className={styles.heading2}>
                Try Our New Service Now!
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] 
            mt-5`}>
                hbdhjdasd adhjhfgdsfgbf dhadg dgadhjgd jshdg
                ajhgd dhhadg dhsdjgadg dhgahdgag hadgjagd ajhd
                dhadhgga dbajgd bdjagdyubkh dhhd dkahd dkhadh 
                hdh djhdd dghdg dhahd hdg dkjsfs djkshgf woeiuy
            </p>

        </div>
        <Button type="button" className={`py-4 px-6 
                bg-blue-gradient font-poppins font-medium 
                text-[18px] text-primary outline-none mt-10 rounded-[10px]`}>
                Get Started
        </Button>

    </section>
)


export default CTA