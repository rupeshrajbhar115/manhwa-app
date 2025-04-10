import CustomButton from "./CustomButton";

export default function HomePage({ onNext }: { onNext: () => void }) {
    function handleNext(){
        console.log("Next Button");
    }
    return (
      <>
        <div>
          <h2>Step 1</h2>
          <button onClick={onNext}>Home Page Next →</button>
  
          <div
            style={{
              display: 'grid',
              marginRight: 'auto',
              marginLeft: 'auto',
              textAlign: 'center',
            }}
          >
            <label>Unleash your</label>
            <label>
              avatar, <span style={{ color: '#FEF200' }}>K-STYLE!</span>
            </label>
          </div>

        </div>
        <div style={{display:'flex',flexDirection:'column',width:'282.12px',height:'397.64px', marginRight:'auto', marginLeft:'auto',border:'solid', marginTop:'30px'}}>
            <span style={{color:'white',marginRight:'auto', marginLeft:'auto',marginTop:'auto', fontWeight: 400, fontSize: '16px', textAlign:'center'}}>Transform your photos into Korean masterpieces!</span>
            <CustomButton id="nextBtn" text="Try now" onClick={handleNext} />
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
  