import CustomButton from "./CustomButton";
export default function Gender({ onNext }: { onNext: () => void }){
    return(<><div>
        <h2>Gender</h2>
        
        </div>
      
            <CustomButton id="nextBtn" text="Next" onClick={onNext} />
        
        
      </>);
}