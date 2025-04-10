import CustomButton from "./CustomButton";
export default function Gender({ onNext }: { onNext: () => void }){

    function handleNext(){
        console.log("Handle Next Gender");
    }
    return(<><div>
        <h2>Step 2</h2>
        <button onClick={onNext}>Gender Next →</button>
      </div>
      
            <CustomButton id="nextBtn" text="Try now" onClick={handleNext} />
        
        
      </>);
}