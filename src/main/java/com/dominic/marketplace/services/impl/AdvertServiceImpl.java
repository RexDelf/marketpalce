package com.dominic.marketplace.services.impl;

import com.dominic.marketplace.models.Advert;
import com.dominic.marketplace.repositories.AdvertRepository;
import com.dominic.marketplace.services.AdvertService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdvertServiceImpl implements AdvertService {

    private final AdvertRepository advertRepository;

    public List<Advert> findAll(){
        return advertRepository.findAll();
    }

    @Override
    public Optional<Advert> findById(Long id) {
        return advertRepository.findById(id);
    }

    @Transactional
    public void save(Advert advert){
        advertRepository.save(advert);
    }

    public void deleteById(Long id){
        advertRepository.deleteById(id);
    }
}
