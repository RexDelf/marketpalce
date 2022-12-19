package com.dominic.marketplace.services;

import com.dominic.marketplace.models.Advert;
import com.dominic.marketplace.models.AdvertImage;

import java.util.List;
import java.util.Optional;

public interface AdvertService {
    List<Advert> findAll();

    Optional<Advert> findById(Long id);

    void save(Advert advert);

    void deleteById(Long id);
}
