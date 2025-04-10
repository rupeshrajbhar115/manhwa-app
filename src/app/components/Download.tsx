export default function Download({ onNext }: { onNext: () => void }){
    return(<><div>
        <h2>Step 7</h2>
        <button onClick={onNext}>Download Next →</button>
      </div></>);
}