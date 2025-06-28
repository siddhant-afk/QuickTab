package com.quicktab.server.services;


import com.quicktab.server.models.Product;
import com.quicktab.server.repositories.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {


    ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {

        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id){

        return productRepository.findById(id);
    }

    public void addProduct(Product product){
        productRepository.save(product);
    }

    public void updateProduct(Long id,Product updatedProduct){
productRepository.findById(id).map(product -> {
    product.setName((updatedProduct.getName()));
    product.setPrice((updatedProduct.getPrice()));
    return productRepository.save((product));
}).orElseThrow(() -> new RuntimeException("Product Not Found"));
    }

    public void deleteProduct(Long id){
        productRepository.deleteById((id));
    }
}
