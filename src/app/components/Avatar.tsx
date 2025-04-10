export default function Avatar({ onNext }: { onNext: () => void }){
    return(<><div>
        <h2>Step 3</h2>
        <button onClick={onNext}>Avatar Next →</button>
      </div></>);
}