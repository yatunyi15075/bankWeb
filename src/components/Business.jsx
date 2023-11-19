import {Button} from 'react-bootstrap';

import { features } from "../constants";
import styles from "../style";
import style, {layout} from '../style';



const FeatureCard = ({icon, title, content, index}) => (
    <div className={`flex flex-row p-6 rounded-[240px] 
     ${index !== features.length - 1 ? "mb-6" : "mb-0"} 
      feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full 
        ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="icon" className="w-[50%] 
            h-[50%] object-contain"/>
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white 
            text-[18px] leading-[23px] mb-1">{title}</h4>
            <p className="font-poppins font-normal text-dimWhite 
            text-[16px] leading-[24px] mb-1">{content}</p>
        </div>
    </div>
)

const Business= () => {
    return(
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                You Handle the Business, <br className="
                 sm:block hidden"/> We'll Handle The Money.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5 ` } >
                    With the right credit card you can 
                    make the right decision boxWidth. Earn
                    rewards and Money and earning amd saving 
                    Money. But with hundreds of credit cards 
                    on the market. 
                </p>
                <Button type="button" className={`py-4 px-6 
                bg-blue-gradient font-poppins font-medium 
                text-[18px] text-primary outline-none mt-10 rounded-[10px]`}>
                    Get Started
                </Button>
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} 
                    index={index} />
                ))}

            </div>

            
        </section>
    )
}

export default Business