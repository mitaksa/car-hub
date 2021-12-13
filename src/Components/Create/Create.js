

const Create = () => {

    const onPostHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let brand = formData.get('brand');
        let model = formData.get('model');
        let price = formData.get('price');
        let imageUrl = formData.get('imageUrl');
        let category = formData.get('category');
        console.log(formData);
    }

    return (

        <div id="container">
            <h1>&bull; Create car post &bull;</h1>
            <div class="underline">
            </div>
            <form onSubmit={onPostHandler} method="POST" id="contact_form">
                <div class="name">
                    <input type="text" placeholder="Car brand" name="brand" id="name_input" required />
                </div>
                <div class="email">
                    <input type="text" placeholder="Car model" name="model" id="email_input" required />
                </div>
                <div class="email">
                    <input type="text" placeholder="Car price $" name="price" id="email_input" required />
                </div>
                <div class="telephone">
                    <input type="text" placeholder="Car image url" name="imageUrl" id="telephone_input" required />
                </div>
                <div class="subject">
                    <select placeholder="Car category" name="category" id="subject_input" required>
                        <option disabled hidden selected>Car category</option>
                        <option>Sport</option>
                        <option>Old</option>
                        <option>New</option>
                    </select>
                </div>
                <div class="message">
                    <textarea name="description" placeholder="Car description" id="message_input" cols="30" rows="5" required></textarea>
                </div>
                <div class="submit">
                    <input type="submit" value="Post" id="form_button" />
                </div>
            </form>
        </div>

    )
}

export default Create;