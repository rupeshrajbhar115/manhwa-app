
import CustomButton from "./CustomButton";
export default function Personal({ onNext }: { onNext: () => void }){
    return(<><div>
        <h2>Personal</h2>
        <CustomButton id="personalbtn" text="Next" onClick={onNext} />
      </div></>);
}