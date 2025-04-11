
import CustomButton from "./CustomButton";

import styles from "../../styles/pages/home.module.scss";
import Grnderbanner from "../img/korean_art.jpg";
import Download from "../img/download_img.jpg";
import DownloadBtn from "../img/download.png";
import Insta from "../img/insta.png";
export default function Explore(){
    return(<div className={styles.explore}>
      <div className={styles.gender_banner}>
            <img src={Grnderbanner.src} alt="Grnderbanner" />
            <div className={styles.gender_title}>
                <h3 className={styles.gender_title_1}>Woohoo! <br/> Now you're K-ready</h3>
                <h3 className={styles.gender_title_2}>Woohoo! <br/> Now you're K-ready</h3>
            </div>
      </div>
      <div className={styles.download_img}>
          <img src={Download.src} alt="Download" /> 
      </div>
      <div className={styles.participate_section}>
        <h3>You can also participate in our giveaway</h3>
          <div className={`${styles.participate_box_1} ${styles.active}`}>
            <div className={styles.participate_number}>
              1
            </div>
            <div className={styles.participate_text}>
                <h4>Put it on your Instagram Stories</h4>
            </div>
          </div>
          <div className={`${styles.participate_box_2} ${styles.active}`}>
            <div className={styles.participate_number}>
              2
            </div>
            <div className={styles.participate_text}>
                <h4>Follow and tag @BurgerKingIndia in your story, Use #AsliKoreanAvatar</h4>
            </div>
          </div>
          <div className={styles.participate_box_3}>
            <div className={styles.participate_number}>
              3
            </div>
            <div className={styles.participate_text}>
                <h4>Download your Asli Korean Avatar</h4>
            </div>
          </div>
      </div>
      <div className={`${styles.btn_section}`}>
        <div className={styles.download_btn}><img src={DownloadBtn.src} alt="DownloadBtn" />  Download My K-Avatar</div>
        <div className={styles.share_btn}><img src={Insta.src} alt="Insta" />Share with your friends</div>
      </div>
      <div style={{bottom:0, width:'100%', display:'flex', justifyContent:'space-between', height:'54px', padding:'20px 12px', marginTop:'auto'}}>
            <span style={{
        fontFamily: 'Flame Sans',
        fontWeight: '400',
        fontSize: '12px',
        letterSpacing: '-2%',
        textAlign: 'center',
        color:'#FFFFFFB2'
    }}>Copyrights@2025</span>
            <span style={{
        fontFamily: 'Flame Sans',
        fontWeight: '400',
        fontSize: '12px',
        letterSpacing: '-2%',
        textAlign: 'center',
        color:'#FFFFFFB2'
    }}>Privacy policy</span>
            <span style={{
        fontFamily: 'Flame Sans',
        fontWeight: '400',
        fontSize: '12px',
        letterSpacing: '-2%',
        textAlign: 'center',
        color:'#FFFFFFB2'
    }}>Support</span>
        </div>
    </div>);
}