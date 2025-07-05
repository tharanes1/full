package com.example.iron.service;

import com.example.iron.model.Product;
import com.example.iron.repo.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private Repo repo;
    public List<Product> getAllProducts() {
        return repo.findAll();
    }
    public Product addProduct(Product product) throws IOException {
        return repo.save(product);
    }
    public Product getProductById(int id) {
        return repo.findById(id).orElse(null);
    }
    public void deleteProduct(int id) {
        repo.deleteById(id);
    }
}
