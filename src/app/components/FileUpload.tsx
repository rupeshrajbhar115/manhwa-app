export default function FileUpload({ onNext }: { onNext: () => void }){
    return(<><div>
        <h2>Step 5</h2>
        <button onClick={onNext}>File Upload Next →</button>
      </div></>);
}