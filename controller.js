const {User,Vehicle,Service}=require('./schema');
const bcrypt=require('bcrypt');

module.exports.login=async(req,res)=>{
    const users=await User.findOne({email:req.body.email})
    if(!users)
    {
        return res.send("Invalid Credentials")
    }
    const passwordMatch = await bcrypt.compare(req.body.password, users.password);
    if(!passwordMatch)
    {
        return res.send("Invalid Credentials");
    }
    return res.send("Login Successful!");
}


module.exports.register=async(req,res)=>{
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const users=new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role,
        contactNumber:req.body.contactNumber
    })
    const existing=await User.findOne({email:req.body.email})
    if(existing){
        return res.status(400).json({ message: 'User already exists with the entered Email Id' });
    }
    else{
        const save_user=await users.save();
        return res.send({ message: "Registered Successfully!", user: save_user });
        
    }
}

module.exports.updateUser=async(req,res)=>{
  try {
    const {name,email,password,contactNumber} = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {name,email,password,contactNumber},
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json("User Updated");
  } catch (error) {
    res.status(500).json({ error: 'Error occurred while updating the user' });
  }
}
module.exports.insertvehicles=async (req, res) => {
    const vehicles = new Vehicle({
      make: req.body.make,
      model: req.body.model,
      year: Number(req.body.year),
      vin: req.body.vin,
      licensePlate: req.body.licensePlate,
      owner: req.body.owner
    });
    const newvehicle=await Vehicle.findOne({vin:req.body.vin})
    if(newvehicle)
    {
        return res.send("Vehicle already registered")
    }
    await vehicles.save();
    res.send(vehicles);
};

module.exports.updateService = async (req, res) => {
  try {
    const { vehicle,serviceType,description,serviceDate,mileage,status,estimatedCompletionDate,partsUsed,laborHours,totalCost} = req.body;
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { vehicle,serviceType,description,serviceDate,mileage,status,estimatedCompletionDate,partsUsed,laborHours,totalCost },
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ error: 'Error occurred while updating the service' });
  }
};

module.exports.deleteVehicle=async(req,res)=>{
  try
  {
    const deleteVehicle =await Vehicle.findByIdAndDelete(req.params.id);
    if(!deleteVehicle)
    {
      return res.status(404).json("Vehicle not found!");
    }
    else{
    return res.send("Vehicle deleted");
    }
  }
    catch (error) {
      res.status(500).json({ error: 'Error occurred while deleting the service' });
    }
}

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error occurred while fetching users' });
  }
};


module.exports.createService = async (req, res) => {
      const services = new Service({
            vehicle:req.body.vehicle,
            serviceType: req.body.serviceType,
            description:req.body.description,
            serviceDate:req.body.serviceDate,
            mileage: req.body.mileage,
            status: req.body.status,
            estimatedCompletionDate:req.body.estimatedCompletionDate,
            partsUsed:req.body.partsUsed,
            laborHours:req.body.laborHours,
            totalCost:req.body.totalCost
      });
      const savedService = await services.save();
      return res.send(savedService);
  };
  
  module.exports.getAllServices = async (req, res) => {
    try {
      const services = await Service.find({});
      res.status(200).json(services);
    } catch (error) {
      res.status(500).json({ error: 'Error occurred while fetching services' });
    }
  };


  
  module.exports.deleteService=async(req,res)=>{
    try
    {
      const deleteService =await Service.findByIdAndDelete(req.params.id);
      if(!deleteService)
      {
        return res.status(404).json("Service not found!");
      }
      else{
      return res.send("Serivce deleted");
      }
    }
      catch (error) {
        res.status(500).json({ error: 'Error occurred while updating the service' });
      }
  }
  

