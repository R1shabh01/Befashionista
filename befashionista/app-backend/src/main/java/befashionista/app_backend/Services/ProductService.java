package befashionista.app_backend.Services;

import befashionista.app_backend.Models.Products;
import befashionista.app_backend.Repositories.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepo ProductRepo;
    public List<Products> getAllProducts() {
        return ProductRepo.findAll();
    }

    public Products getProductById(int id) {
        return ProductRepo.findById(id).orElse(null);
    }

    public Products addProduct(Products products, MultipartFile file) throws IOException {
        products.setImageName(file.getOriginalFilename());
        products.setImageType(file.getContentType());
        products.setImageData(file.getBytes());
        return ProductRepo.save(products);
    }

    public Products updateProduct(int id, Products products, MultipartFile file) throws IOException {
        products.setImageName(file.getOriginalFilename());
        products.setImageType(file.getContentType());
        products.setImageData(file.getBytes());
        return ProductRepo.save(products);
    }

    public void deleteById(int id) {
        ProductRepo.findById(id);
    }
}
