package com.klef.prac.backend.service;

import com.klef.prac.backend.model.Bike;
import com.klef.prac.backend.repository.BikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BikeServiceImpl implements BikeService {

    @Autowired
    private BikeRepository bikeRepository;

    @Override
    public List<Bike> getAllBikes() {
        return bikeRepository.findAll();
    }

    @Override
    public Optional<Bike> getBikeById(Long id) {
        return bikeRepository.findById(id);
    }

    @Override
    public Bike saveBike(Bike bike) {
        return bikeRepository.save(bike);
    }

    @Override
    public Bike updateBike(Long id, Bike updatedBike) {
        return bikeRepository.findById(id).map(bike -> {
            bike.setName(updatedBike.getName());
            bike.setBrand(updatedBike.getBrand());
            bike.setPrice(updatedBike.getPrice());
            return bikeRepository.save(bike);
        }).orElse(null);
    }

    @Override
    public void deleteBike(Long id) {
        bikeRepository.deleteById(id);
    }
}