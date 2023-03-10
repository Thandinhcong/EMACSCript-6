import { router, useEffect } from "../../lib";
import axios from "axios";
import { addprofile } from "../../api/profiles";
const AdminAddprofile = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const name = document.getElementById("profile-name");
        const email = document.getElementById("profile-email");
        const phone = document.getElementById("profile-phone");
        const address = document.getElementById("profile-address");
        const job = document.getElementById("profile-job");
        const sex = document.getElementById("profile-sex");
        const Education = document.getElementById("profile-education");
        const date = document.getElementById("profile-date")
        const img = document.getElementById("profile-img")

        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            const urls = await upLoadFile(img.files);
            const newProfiles = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                address: address.value,
                job: job.value,
                sex: sex.value,
                Education: Education.value,
                date: date.value,
                gallery: urls,
            }
            addprofile(newProfiles)
                .then(() => { router.navigate("/admin/profiles") })
                .catch((error) => console.log(error))
        })
    }, [])

    const upLoadFile = async (files) => {
        if (files) {
            const CloudName = 'dxzlnojyv';
            const Preset_Name = 'demo-upload';
            const Foldel_Name = "ES6";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CloudName}/image/upload`;

            const formData = new FormData();
            formData.append('upload_preset', Preset_Name);
            formData.append("folder", Foldel_Name);
            for (const file of files) {
                formData.append("file", file);
                const response = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                urls.push(response.data.secure_url)
            }
            return urls;
        }
    }
    return `
<div class="add-profile">
    <h1>Th??m th??ng tin ng?????i d??ng</h1>
    <form action="" id="form-add">
    <div class="form-group">
        <label for="" class="form-label">H??? t??n</label>
        <input type="text" placeholder="Nh???p h??? t??n" id="profile-name" class="form-control">
        <label for="" class="form-label">Email</label>
        <input type="text" placeholder="Nh???p email" id="profile-email" class="form-control">
        <label for="" class="form-label">S??? ??i???n tho???i</label>
        <input type="text" placeholder="Nh???p s??? ??i???n tho???i" id="profile-phone" class="form-control">
        <label for="" class="form-label">?????a ch???</label>
        <input type="text" placeholder="Nh???p ?????a ch???" id="profile-address" class="form-control">
        <label for="" class="form-label">C??ng vi???c</label>
        <input type="text" placeholder="Nh???p c??ng vi???c" id="profile-job" class="form-control">
        <label for="" class="form-label">Gioi t??nh</label>
        <input type="text" placeholder="Nh???p gi??i t??nh" id="profile-sex" class="form-control">
        <label for="" class="form-label">Tr?????ng h???c</label>
        <input type="text" placeholder="Nh???p Tr?????ng h???c" id="profile-education"      class="form-control">
        <label for="" class="form-label">image</label>
        <input type="file" id="profile-img" multiple class="form-control">
        <label for="" class="form-label">Ng??y sinh</label>
        <input type="" id="profile-date"  class="form-control">
    </div>
      <button type='submit' class="btn btn-primary">Th??m</button>
    </form>
  </div>`;
}
export default AdminAddprofile;