export default function UserInput({onChangeInput, userInput}) {



    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} required onChange={(event) => onChangeInput(event.target.value, 'initialInvestment')} />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event) => onChangeInput(event.target.value, 'annualInvestment')} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event) => onChangeInput(event.target.value, 'expectedReturn')} />
                </p>
                <p>
                    <label htmlFor="">Duration of the Investment</label>
                    <input type="number" required value={userInput.duration} onChange={(event) => onChangeInput(event.target.value, 'duration')} />
                </p>
            </div>
        </section>
    );
}