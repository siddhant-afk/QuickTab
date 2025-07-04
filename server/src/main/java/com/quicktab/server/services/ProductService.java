package com.quicktab.server.services;


import com.quicktab.server.models.Product;
import com.quicktab.server.models.User;
import com.quicktab.server.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {


    private final ProductRepository productRepository;
    private final QuicktabUserDetailsService userDetailsService;


    @Autowired
    public ProductService(ProductRepository productRepository,
                          QuicktabUserDetailsService userDetailsService) {
        this.productRepository = productRepository;
        this.userDetailsService = userDetailsService;
    }



    public List<Product> getAllProductsForCurrentUser() {
        User currentUser = userDetailsService.getCurrentUser();
        return productRepository.findByUser(currentUser);
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
    return productRepository.save(product);
}).orElseThrow(() -> new RuntimeException("Product Not Found"));
    }

    public void deleteProduct(Long id){
        productRepository.deleteById((id));
    }
}
