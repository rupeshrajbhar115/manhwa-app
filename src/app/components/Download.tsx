import CustomButton from "./CustomButton";
export default function Download({ onNext }: { onNext: () => void }){
    return(<><div>
        <h2>Download</h2>
        <CustomButton id="downloadbtn" text="Next" onClick={onNext}></CustomButton>
      </div></>);
}