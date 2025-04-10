export default function Personal({ onNext }: { onNext: () => void }){
    return(<><div>
        <h2>Step 4</h2>
        <button onClick={onNext}>Personal Next →</button>
      </div></>);
}