package com.klef.prac.backend.controller;

import com.klef.prac.backend.model.Bike;
import com.klef.prac.backend.service.BikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bikes")
@CrossOrigin(origins = "*") 
public class BikeController {

    @Autowired
    private BikeService bikeService;

    @GetMapping
    public List<Bike> getAllBikes() {
        return bikeService.getAllBikes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bike> getBikeById(@PathVariable Long id) {
        Optional<Bike> bike = bikeService.getBikeById(id);
        return bike.map(ResponseEntity::ok)
                   .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Bike> createBike(@RequestBody Bike bike) {
        Bike saved = bikeService.saveBike(bike);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Bike> updateBike(@PathVariable Long id, @RequestBody Bike updated) {
        Bike bike = bikeService.updateBike(id, updated);
        if (bike == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(bike);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBike(@PathVariable Long id) {
        bikeService.deleteBike(id);
        return ResponseEntity.noContent().build();
    }
}