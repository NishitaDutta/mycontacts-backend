//@desec Get all contact
//@route GET /api/contacts
//@access public
const getContacts = (req , res) => {
    res.status(200).json({ message:"Get all contacts" });
};

//@desec Create New contact
//@route GET /api/contacts
//@access public
const createContact = (req , res) => {
    console. log("The request body is :", req.body);
    const { name, email, phone }= req.body;
    if (!name || !email || !phone) {
     res.status(400);
     throw new Error("All fields are mandatory !");
    }
    res.status(201).json({ message:"Create Contact" });
};
//@desec Get contact
//@route POST /api/contacts/:id
//@access public
const getContact = (req , res) => {
    res.status(200).json({ message:'Get contact for ${req.params.id}'});
};

//@desec Update contact
//@route PuT /api/contacts/:id
//@access public
const updateContact = (req , res) => {
    res.status(200).json({ message:'Update contact for ${req.params.id}' });
};

//@desec Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req , res) => {
    res.status(201).json({ message: 'Delete contact for ${req.params.id}' });
};
module.exports = { 
    getContacts,
    createContact, 
    getContact, 
    updateContact, 
    deleteContact,
};