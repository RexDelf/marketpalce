package com.dominic.marketplace.services.impl;

import com.dominic.marketplace.models.Advert;
import com.dominic.marketplace.repositories.AdvertRepository;
import com.dominic.marketplace.services.AdvertService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdvertServiceImpl implements AdvertService {

    private final AdvertRepository advertRepository;

    public Page<Advert> findAll(Integer pageNumber, Integer pageSize){
        Pageable paging = PageRequest.of(pageNumber, pageSize);
        return advertRepository.findAll(paging);
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
