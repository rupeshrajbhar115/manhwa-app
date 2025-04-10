import CustomButton from "./CustomButton";
export default function FileUpload({ onNext }: { onNext: () => void }){
    return(<><div>
        <h2>File Upload</h2>
        <CustomButton id="fileuploadbtn" text="Next" onClick={onNext}></CustomButton>
      </div></>);
}