✅ Example 3: API Service Factory (🔥 YOUR DOMAIN)
class UserService {
  get() { return "User Data"; }
}

class ProductService {
  get() { return "Product Data"; }
}

class ServiceFactory {
  static services = {
    user: UserService,
    product: ProductService
  };

  static getService(name) {
    const Service = this.services[name];
    if (!Service) throw new Error("Service not found");
    return new Service();
  }
}

const service = ServiceFactory.getService("user");
console.log(service.get());