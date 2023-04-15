import './Assign.css'

const Assign = () => {
    const onSubmit = (e)=> {
        e.preventDefault()
    }

    return (
        <div className="assign">
            אז אם אתם מעוניינים במשכנתא בידיים שאתם יכולים לסמוך עליהם, אחת כזו שנוחה לכם ובתנאים שלכם. צרו קשר ונחזור אליכם
            <form className='form' onSubmit={onSubmit}>
                <label>
                    שם:
                    {" "}
                    <input type="text" placeholder='שם פרטי ושם משפחה' />
                </label>
                <label>
                    טלפון:
                    {" "}
                    <input type="number" placeholder='05...' />
                </label>
                <label>
                    אימייל:
                    {" "}
                    <input type="email" placeholder='example@email.com' />
                </label>
                <input className='submit' type="submit" value='שלח'/>
            </form>
        </div>
    )
}

export default Assign