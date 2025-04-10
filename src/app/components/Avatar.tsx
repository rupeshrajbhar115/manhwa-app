import CustomButton from "./CustomButton";

export default function Avatar({ onNext }: { onNext: () => void }){
    return(<><div>
        <h2>Avatar</h2>
        <CustomButton id="avatarbtn" text="Next" onClick={onNext}></CustomButton>
      </div></>);
}