
package com.klef.prac.backend.service;

import com.klef.prac.backend.model.Bike;
import java.util.List;
import java.util.Optional;

public interface BikeService {
    List<Bike> getAllBikes();
    Optional<Bike> getBikeById(Long id);
    Bike saveBike(Bike bike);
    Bike updateBike(Long id, Bike bike);
    void deleteBike(Long id);
}
