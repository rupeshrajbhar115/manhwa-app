import CustomButton from "./CustomButton";
import styles from "../../styles/pages/home.module.scss";
import HeaderLogo from "../img/home_logo.png";
import HomeBanner from "../img/home_banner.png";
import DownArrow from "../img/down_arrow.png";

export default function HomePage({ onNext }: { onNext: () => void }) {

    
    return (
      <>
        <div className={styles.home_page_wrapper}>
          <div className={styles.Header_logo}>
            <img src={HeaderLogo.src} alt="logo" />
          </div>

          <div className={styles.home_banner}>
            <img src={HomeBanner.src} alt="HomeBanner" />
          </div>

          <div className={styles.banner_title}>
            <h4 className={styles.banner_title_text}>transform your photos into <br/> korean masterpieces.</h4>
          </div>

          <img src={DownArrow.src} className={styles.down_arrow} alt="DownArrow" />

          <div className={styles.home_avatar_section}>
            <h2 className={styles.home_avatar_1}>Unleash your <br/> avatar, K-STYLE!</h2>
            <h2 className={styles.home_avatar_2}>Unleash your <br/> avatar, K-STYLE!</h2>
          </div>

          <form className={`${styles.form}`}>
				<div className={styles.formGroupSection}>
					<div className={styles.formGroup}>
						<label className={`${styles.lable_text}`}>
              Enter name to begin<span>*</span>
						</label>
						<input
							className={`${styles.input} text_xs`}
							type="text"
							id="name"
							name="name"
							placeholder="Enter name to begin*"
						/>
					</div>
				</div>
				<div className={styles.formGroupSection}>
					<div className={`${styles.formGroup} ${styles.check_box}`}>
						<input
							type="checkbox"
							id="terms"
							name="terms"
						/>
						
						<label className={styles.agree} htmlFor="terms">
						I agree to receive updates from Burger King
							{/* <a
								href="https://www.lubrizol.com/Legal/Lubrizol-Privacy-and-Cookie-Policy"
								target="_blank"
							>
								terms of use
							</a> */}
						</label>
					</div>
				</div>
				<div className={`${styles.btn_section}`}>
          <CustomButton id="nextBtn" text="Try now" onClick={onNext} />
				</div>
			</form>
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
      </>
    );
  }
  